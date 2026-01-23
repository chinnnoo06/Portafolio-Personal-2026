import { Schema, model } from "mongoose"
import { TProject, TProjectContent } from "../types/project.types"

const ProjectContentSchema = new Schema<TProjectContent>(
  {
    type: {
      type: String,
      required: true,
      enum: ["paragraph", "heading", "quote"],
    },

    text: {
      type: String,
      required: true
    },

    level: {
      type: Number,
      enum: [2, 3],
      required: function (this: any) {
        return this.type === "heading"
      },
    },
  },
  { _id: false }
)

const ProjectSchema = new Schema<TProject>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },

    excerpt: {
      type: String,
      required: true,
    },

    content: {
      type: [ProjectContentSchema],
      required: true,
    },

    images: {
      type: [String],
      required: true,
      default: [],
    },

    technologies: {
      type: [String],
      required: true,
      default: [],
    },

    githubUrl: {
      type: String,
      default: null,
    }
  },
  {
    timestamps: true,
  }
)

export const Project = model<TProject>("Project", ProjectSchema, "projects")
