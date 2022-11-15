import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Nodejs",
    educator: "Daniele Leão",
    duration: 3,
  });

  CreateCourseService.execute({
    name: "Nodejs",
    educator: "Daniele Leão",
  });

  return response.send();
};
