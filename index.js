//Apabila menggunakan ESM
import {tambah} from "./utils/math.js";
import {kali} from "./utils/math.js";
import profileRouter from "./routes/profile.js";
import userRouter from "./routes/profileUser.js";

import express from "express";

//Apabila menggunakan CJS
// import {getUsers} from "./routes/profile.js"
// const math = require("math");
// const express = require('express');

const app = express();
const PORT = 3000;

//akses router lain
app.use("/profile", profileRouter);
app.use("/profiles", userRouter);

app.get('/', (req, res) => {
    res.send('<br> Nama: Izzat Nazhiefa <br> NIM: F1D02310114');
});

//akses fungsi math
app.get('/hitung', (req, res) => {
    const hasilTambah = tambah(20, 4);
    const hasilKali = kali(20, 4);
    res.send(`<br> Hasil tambah 20 + 4: ${hasilTambah} <br>
            Hasil kali 20 * 4: ${hasilKali}`);
    
});

//karena sudah menggunakan app.use maka ini dapat dihapus, 
//karena sudah dipindah ke routernya masing2

//handle data dari API
// app.get('/profile', async (req, res) => {
//     const dataUser = await getUsers()
//     res.json(dataUser);
// });

//handle data dari array buatan sendiri
// app.get('/profiles', (req, res) => {
//     const profile = users();
//     res.json(profile);
// });

app.listen(PORT, () => {
    console.log('Server run http://localhost:3000');
}); 