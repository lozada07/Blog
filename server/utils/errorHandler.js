import { MongoError } from "mongodb";
import { MongooseError } from "mongoose";

export class CustomError extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statuscode = statuscode;
  }
}

export const errorHandler = (fc, errorMessage = "", statuscode = 400) => {
  return (req, res, next) => {
    fc(req, res).catch((error) => {
      console.log(error);
      if (error instanceof MongoError || error instanceof MongooseError) {
        error = new CustomError(errorMessage, statuscode);
      }
      next(error);
    });
  };
};

export const resError = (res, status, message) => {
  return res.status(status).json({
    error: true,
    message,
    status,
  });
};
