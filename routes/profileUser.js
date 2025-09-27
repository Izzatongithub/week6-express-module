import express from "express";

//membuat router
const userRouter = express.Router();

//data array json buatan sendiri
const users = [
    {id: 1, NIM: "20230114", Nama: "izzat", Usia: "20", Fakultas: "STEI"},
    {id: 2, NIM: "20230098", Nama: "abdi", Usia: "20", Fakultas: "STEI"},
    {id: 3, NIM: "20230042", Nama: "Alfia", Usia: "20", Fakultas: "STEI"},
    {id: 4, NIM: "20230052", Nama: "Nufa", Usia: "20", Fakultas: "FTTM"},
    {id: 5, NIM: "20230048", Nama: "Fadila", Usia: "20", Fakultas: "FTMD"},
    {id: 6, NIM: "20230138", Nama: "Suci", Usia: "20", Fakultas: "FTMD"},
    {id: 7, NIM: "20230666", Nama: "Fadlullah", Usia: "19", Fakultas: "FSRD"},
    {id: 8, NIM: "20230779", Nama: "RIzaldi", Usia: "20", Fakultas: "STEI"},
    {id: 9, NIM: "20230144", Nama: "Bayu", Usia: "20", Fakultas: "FSRD"},
    {id: 10, NIM: "20230045", Nama: "Reksa", Usia: "20", Fakultas: "FTTM"}
];

//GET semua data
userRouter.get('/profiles', (req, res) => {
    const profile = users();
    res.json(profile);
});

//route GET berdasarkan id
userRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(i => i.id === id);

    if (!user) {
        return res.status(404).json({ message: "User tidak ditemukan" });
    }

    //menampilkan data sesuai id
    res.json(user);
});


export default userRouter;