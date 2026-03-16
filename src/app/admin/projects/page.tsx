'use client';

import { motion } from 'framer-motion';
import { Plus, Pencil, Trash2, MapPin, Tag, X, Save } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Image from 'next/image';

interface Project {
  _id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  images: string[];
  description: string;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    imageUrl: '',
    images: '', // Comma separated for form ease
    description: '',
  });

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const json = await res.json();
      if (json.success) setProjects(json.data);
    } catch {
      toast.error('Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleOpenModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title,
        category: project.category,
        location: project.location,
        imageUrl: project.imageUrl,
        images: project.images ? project.images.join(', ') : '',
        description: project.description,
      });
    } else {
      setEditingProject(null);
      setFormData({ title: '', category: '', location: '', imageUrl: '', images: '', description: '' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEditing = !!editingProject;
    const url = '/api/projects';
    const method = isEditing ? 'PUT' : 'POST';
    
    const projectData = {
      ...formData,
      images: formData.images.split(',').map(s => s.trim()).filter(s => s !== ''),
    };

    const body = isEditing ? { ...projectData, id: editingProject._id } : projectData;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (json.success) {
        toast.success(isEditing ? 'Project updated' : 'Project created');
        fetchProjects();
        setIsModalOpen(false);
      } else {
        toast.error(json.error || 'Operation failed');
      }
    } catch {
      toast.error('An error occurred');
    }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      const res = await fetch('/api/projects', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        toast.success('Project deleted');
        setProjects(projects.filter(p => p._id !== id));
      }
    } catch {
      toast.error('Failed to delete project');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold dark:text-white">Project Portfolio</h3>
          <p className="text-sm text-gray-500">Add or manage your construction projects</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-brand-yellow text-brand-black px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-yellow-dark transition-all"
        >
          <Plus size={20} /> Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl h-64 animate-pulse" />
          ))
        ) : projects.map((project) => (
          <motion.div 
            key={project._id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div className="relative h-48">
              <Image 
                src={project.imageUrl || 'https://via.placeholder.com/400x300'} 
                alt={project.title} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button 
                  onClick={() => handleOpenModal(project)}
                  className="p-3 bg-white text-brand-black rounded-full hover:scale-110 transition-transform"
                >
                  <Pencil size={18} />
                </button>
                <button 
                  onClick={() => deleteProject(project._id)}
                  className="p-3 bg-red-500 text-white rounded-full hover:scale-110 transition-transform"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-900 dark:text-white truncate">{project.title}</h4>
              <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Tag size={12} /> {project.category}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {project.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-brand-black border border-gray-200 dark:border-white/10 w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
              <h3 className="text-lg font-bold dark:text-white">{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full text-gray-500">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Project Title</label>
                  <input 
                    type="text" required value={formData.title} 
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-transparent focus:border-brand-yellow/50 rounded-xl outline-none dark:text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Category</label>
                  <input 
                    type="text" required value={formData.category} 
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-transparent focus:border-brand-yellow/50 rounded-xl outline-none dark:text-white"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Location</label>
                  <input 
                    type="text" required value={formData.location} 
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-transparent focus:border-brand-yellow/50 rounded-xl outline-none dark:text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Thumbnail URL</label>
                  <input 
                    type="text" required value={formData.imageUrl} 
                    onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-transparent focus:border-brand-yellow/50 rounded-xl outline-none dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Carousel Images (Comma Separated URLs)</label>
                <textarea 
                  rows={2} value={formData.images} 
                  onChange={e => setFormData({ ...formData, images: e.target.value })}
                  placeholder="url1, url2, url3..."
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-transparent focus:border-brand-yellow/50 rounded-xl outline-none dark:text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Description</label>
                <textarea 
                  required rows={3} value={formData.description} 
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-transparent focus:border-brand-yellow/50 rounded-xl outline-none dark:text-white"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all mt-4"
              >
                <Save size={18} /> {editingProject ? 'Save Changes' : 'Create Project'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
