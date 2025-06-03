import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token =
    req.cookies.accessToken ||
    req.headers["authorization"]?.split(" ")[1] ||
    req.headers["x-access-token"];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "You are not authorize" });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET_KEY || "gahg48589a45ajfjAUFAHHFIhufuu",
    (err, user) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: "token is invalid" });
      }

      req.user = user;
      next();
    }
  );
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "you are not authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "you are not authorize" });
    }
  });
};
