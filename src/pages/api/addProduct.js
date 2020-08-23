import nextConnect from "next-connect";

const handler = nextConnect();

handler.post(async (req, res) => {
  if (req.body.name) res.status(200).send("Added Successfully");
  else res.send(500).status("Adding Product failed");
});

export default handler;
