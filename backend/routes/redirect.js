const express= require("express");
const router=express.Router();

router.get('/redirect', (req,res)=>{
    res.redirect('http://localhost:5173/roadmap');
});
router.get('/learn',(req,res)=>{
    res.redirect('http://localhost:5173/learn')
})
router.get('/Achievements',(req,res)=>{
    res.redirect('http://localhost:5173/Achievements')
})
router.get('/topic1',(req,res)=>{
    res.redirect('http://localhost:5173/topic1')
})
router.get('/topic2',(req,res)=>{
    res.redirect('http://localhost:5173/topic2')
})
router.get('/topic3',(req,res)=>{
    res.redirect('http://localhost:5173/topic3')
})
router.get('/topic4',(req,res)=>{
    res.redirect('http://localhost:5173/topic4')
})
router.get('/topic5',(req,res)=>{
    res.redirect('http://localhost:5173/topic5')
})
router.get('/topic6',(req,res)=>{
    res.redirect('http://localhost:5173/topic6')
})
router.get('/topic7',(req,res)=>{
    res.redirect('http://localhost:5173/topic7')
})
router.get('/topic8',(req,res)=>{
    res.redirect('http://localhost:5173/topic8')
})
router.get('/topic9',(req,res)=>{
    res.redirect('http://localhost:5173/topic9')
})
module.exports=router;
