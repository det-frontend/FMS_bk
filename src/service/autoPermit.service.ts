import autoPermitModel from "../model/autoPermit.model";

export const autoPermitGet = async () => {
  return await autoPermitModel.findOne({ id: "1" });
}; 

export const autoPermitUpdate = async (mode: string) => {
  await autoPermitModel.findOneAndUpdate({ id: "1" }, { mode });
  return await autoPermitModel.findOne({ id: "1" });
};

export const autoPermitAdd = async () => {
 try{
  let body = {
    id : "1",
    mode : "allow"    
  }
  let count = await autoPermitModel.countDocuments();
  if (count >= 1) throw new Error("that cann't add");
  return await new autoPermitModel(body).save();
 }catch(e){
  console.log("already exist")
 }
};
