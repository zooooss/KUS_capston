var express = require("express");
var router = express.Router();
var { exec } = require("child_process");
const multer = require("multer");
const upload = multer({dest:"myapp/FileSystem"});//영상파일시스템 상대경로임
const spawn = require('child_process').spawn

/* GET users listing. */
router.post("/", upload.single("file"),(req, res) => {

  // 1. 받은 파일 저장 -> req 안에 파일이 있음 -> 파일을 또 Filesystem에 저장
  //npm install express-fileupload 설치 완료.
  //multer
  
  console.log(req.file);

  if(!req.file){
    return res.status(400).send("파일이업로드되지않음.");
  }
  res.send("파일이 업로드 되었음.");

  var filePath = path.join(__dirname, "myapp/FileSystem", req.file.filename);
  // 2. FS로부터 불러와서 python3 코드 실행
  //router.post('/',uploader.single('file'),async(req,res)=>{
    //python실행 + 받은 파일과 파일명 전달
   // const net = spawn('python',['inference.py',req.file.filename]);

  exec("inference.py " + filePath, (error, stdout, stderr) => {
    if (error) {
      console.error(`딥러닝 돌릴 때 에러 발생: ${error}`);
      return;
    }
  
   // 3. Python 코드 실행 결과 파일을 다른 Filesystem에 저장하기
   var resultFilePath = "myapp/FileSystem/RESULT"; // 결과 파일을 저장할 경로 및 확장자

   fs.rename(req.resultFilePath, resultFilePath, (err) => {
    if (err) {
      console.error(`파일 이동 중 에러 발생: ${err}`);
      return;
    }

     console.log("결과 파일이 성공적으로 저장되었습니다.");

     // 4. 결과 파일을 다시 res로 불러오기
     var resultFile = fs.readFileSync(resultFilePath);

     res.send(resultFile);

  })
})
});

module.exports = router;