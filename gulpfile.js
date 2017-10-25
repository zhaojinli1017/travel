var gulp = require("gulp");
var fs = require("fs");
var url = require("url");
var path = require("path");
var webserver = require("gulp-webserver");

gulp.task("server",function(){
    gulp.src("./")
        .pipe(webserver({
            port:8090,
            host:"localhost",
            livereload:true,
            directoryListing:{
                path:"./Data",
                enable:true
            },
            open:false,
            middleware:function(req,res,next){
                var pathname = url.parse(req.url);
                var mockFileUrl = path.join(__dirname,"Data",pathname.query+".json");
                //console.log(mockFileUrl);
                fs.exists(mockFileUrl,function(exist){
                    if(!exist){
                        res.writeHead(404,{
                            "Content-Type":"text/json;charset=utf8",
                            "Access-Control-Allow-Origin":"*"
                        })
                        res.end("not file!")
                    }
                    fs.readFile(mockFileUrl,function(err,data){
                        if(err){return}
                        res.writeHead(200,{
                            "Content-Type":"text/json;charset=utf8",
                            "Access-Control-Allow-Origin":"*"
                        })
                        res.end(data.toString())
                    })
                })
            }
        })) 
})

var minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('minifycss', function () {
	return gulp.src(['Content/css/*.css'])
		.pipe(concat('main.css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('Content/css'))
		.pipe(notify({messafe: 'ok!'}))
});