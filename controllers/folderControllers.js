import Folder from "../models/Folder.js";

const newFolder = async (req, res) => {
  try {
    const doc = new Folder(req.body);
    await doc.save();
    res.json({ msg: "data saved" });
  } catch (error) {
    console.log(error);
  }
};

export { newFolder };
