import express from "express";

const profileRouter = express.Router();

//fungsi async utk ambil data dari API
async function getUsers(){
    try{
        console.log("Ambil data user...");
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log("data user berhasil diambil..");
        return data;
    }catch(error){
        console.log("terjadi error:", error);
    }
}

//GET semua data
profileRouter.get('/profile', async (req, res) => {
    const dataUser = await getUsers()
    res.json(dataUser);
});

//route GET berdasarkan id
profileRouter.get("/:id", async(req, res) => {
    const users = await getUsers();
    const id = parseInt(req.params.id);
    const user = users.find(i => i.id === id);

    if (!user) {
        return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.json(user);
});

export default profileRouter;