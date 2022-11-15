import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute("NodeJS", 10, "Daniele Leão");

  return response.send();
};