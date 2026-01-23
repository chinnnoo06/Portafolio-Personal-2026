import { Project } from "../models/Project"
import { TMongoIdParams } from "../types/mongo.types"
import { TGetOneProjectParams } from "../types/params.types"
import { TProject } from "../types/project.types"
import { Document, PipelineStage } from "mongoose"

type TProejctDocument = Document & TProject

export const projectRepository = {
    async addProduct(data: TProject) {
        return Project.create(data)
    },
    async findById(id: TMongoIdParams['id']) {
        return Project.findById(id)
    },
    async save(project: TProejctDocument) {
        return project.save()
    },
    async deleteOne(project: TProejctDocument) {
        return project.deleteOne()
    },
    async getProjects() {
        return Project.find().sort({ createdAt: -1 });
    },
    async getInitialsProjects(pipeline: PipelineStage[]) {
        return Project.aggregate(pipeline)
    },
    async getOneProject(slug: TGetOneProjectParams['slug']) {
        return Project.findOne({ slug })
    },
}
