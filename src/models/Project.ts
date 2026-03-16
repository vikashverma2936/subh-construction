import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  images: string[];
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    imageUrl: { type: String, required: true },
    images: { type: [String], default: [] },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);

export default Project;
