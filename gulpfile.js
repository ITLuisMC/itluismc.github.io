//-------------------DECLARATIONS-----------------
const gulp = require('gulp'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  postcss = require('gulp-postcss'),
  postcssNormalize = require('postcss-normalize'),
  autoprefixer = require('autoprefixer'),
  rename = require("gulp-rename"),
  csso = require('gulp-csso'), //- Minificar css
  jshint = require('gulp-jshint'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  notify = require('gulp-notify'),
  clean = require('gulp-clean');
//*********************GLOBALES******************************************************************
function pasaBuildImagenes() {
  return gulp.src('src/assets/images/*')
    .pipe(gulp.dest('build/assets/images/'))
}
function pasaDistImagenes() {
  return gulp.src('src/assets/images/*')
    .pipe(gulp.dest('dist/assets/images/'))
}
//-JS
var inputJs = [
  // 'src/scripts/layout.js',
  // 'src/scripts/asides.js'
  'src/scripts/*.js'
];
var outputBuildJs = "build/scripts/";
var outputDistJs = "dist/scripts/";

function revisaJS() {
  return gulp
    .src(inputJs)
    .pipe(jshint())
    .pipe(notify(function (file) {
      if (file.jshint.success) {
        return false;
      }
      var errors = file.jshint.results.map(function (data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }));
};

//*********************BUILD******************************************************************
//- ESTAS FUNCIONES SON PARA LA VERSION DESARROLLO
//-------------------FUNCTIONS--------------------

//-JS
//----*****************CLEANS JS**********************************
function cleanBuildJS() {
  return gulp.src('build/scripts/*.js', {read: false})
    .pipe(clean());
};

function cleanDistJS() {
  return gulp.src('dist/scripts/*.js', {read: false})
    .pipe(clean());
};
//----*****************COMPILER JS**********************************
function buildJS() {
  return gulp
    .src(inputJs)
    .pipe(concat('main.js'))
    .pipe(babel()) //-PROBANDO TAMBIEN CON BABEL
    .pipe(gulp.dest(outputBuildJs))
    .pipe(notify({
      title: 'optimizaJs',
      message: 'Js concatenado'
    }));
}
function distJS() {
  return gulp
    .src('build/scripts/main.js')
    .pipe(gulp.dest(outputDistJs))
}
function minJS() {
  return gulp
    .src('build/scripts/main.js')
    // .pipe(rename({
    //   suffix: '.min' //-renombro
    // }))
    .pipe(uglify())
    .pipe(gulp.dest(outputDistJs))
}
function watchJS() {
  gulp.watch(
    'src/scripts/*.js',
    gulp.series(buildJS)
  );
}
//***********************************PUGS******************************************************************
//*********************CLEANNN PUGS build******************************************************************
function cleanBuildPages() {
  return gulp.src('build/*.html', {read: false})
    .pipe(clean());
};

/* function cleanBuildArticles() {
  return gulp.src('build/articles/*.html', {read: false})
    .pipe(clean());
}; */

/* function cleanBuildProjects() {
  return gulp.src('build/projects/*.html', {read: false})
    .pipe(clean());
}; */

/* function cleanBuildSkills() {
  return gulp.src('build/skills/*.html', {read: false})
    .pipe(clean());
}; */
//*********************CLEANNN PUGS Dist******************************************************************
function cleanDistPages() {
  return gulp.src('dist/*.html', {read: false})
    .pipe(clean());
};

/* function cleanDistArticles() {
  return gulp.src('dist/articles/*.html', {read: false})
    .pipe(clean());
}; */

/* function cleanDistProjects() {
  return gulp.src('dist/projects/*.html', {read: false})
    .pipe(clean());
}; */

/* function cleanDistSkills() {
  return gulp.src('dist/skills/*.html', {read: false})
    .pipe(clean());
}; */
//*---------------PUG's > HTML BUILD--------------------
function pagesBuildPug() {
  return gulp.src('src/views/*.pug')
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('build'))
}

/* function skillsBuildPug() {
  return gulp.src('src/views/skills/*.pug')
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('build/skills/'))
} */

/* function articlesBuildPug() {
  return gulp.src('src/views/articles/*.pug')
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('build/articles/'))
} */

/* function projectsBuildPug() {
  return gulp.src('src/views/projects/*.pug')
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(gulp.dest('build/projects/'))
} */

/* function pugsBuild() {
  return gulp.parallel(pagesPug, skillsPug, postPug, projectPug)
} */

// function watchPugs() {
//   return gulp.watch(
//     'src/views/**/**/**/*.pug',
//     gulp.parallel(pagesBuildPug, skillsBuildPug, articlesBuildPug, projectsBuildPug)
//   );
// }
function watchPugs() {
  return gulp.watch(
    'src/views/**/**/**/*.pug',
    gulp.parallel(pagesBuildPug)
  );
}
//*---------------PUG's > HTML DIST--------------------
function pagesDistPug() {
  return gulp.src('src/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
}

/* function skillsDistPug() {
  return gulp.src('src/views/skills/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/skills/'))
} */

/* function articlesDistPug() {
  return gulp.src('src/views/articles/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/articles/'))
} */

/* function projectsDistPug() {
  return gulp.src('src/views/projects/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/projects/'))
} */

// function pugsDist() {
//   gulp.parallel(pagesDistPug, skillsDistPug, articlesDistPug, projectsDistPug)
// }
/* function pugsDist() {
  gulp.parallel(pagesDistPug, projectsDistPug)
} */

//*-----------------SASS > CSS--------------------
//*-----------------BUILD> CSS-------------------------
function cleanBuildCSS() {
  return gulp.src('build/styles/*.css', {read: false})
    .pipe(clean());
};
function cleanDistCSS() {
  return gulp.src('dist/styles/*.css', {read: false})
    .pipe(clean());
};
function css() {
  return gulp.src('src/sass/main.scss') // Leo el archivo scss
    .pipe(sass()) // Convierto el contenido del archivo index.scss a CSS
    //-.pipe(postCSS()) // Paso autoprefixer para correcto visionado en navegadores.
    .pipe(gulp.dest('build/styles/')); // El CSS generado lo guardamos en la carpeta css
}

function cssDist() {
  return gulp.src('build/styles/main.css') // Leo el archivo scss
    .pipe(gulp.dest('dist/styles/')); // El CSS generado lo guardamos en la carpeta css
}

function postCSS() {
  return gulp.src('build/styles/main.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(postcss([postcssNormalize()]))
    .pipe(gulp.dest('build/styles/'));
};

function cssBuild() {
  return gulp.series(css, postCSS)
}

function watchSass() {
  return gulp.watch(
    'src/sass/**/**/**/*.scss',
    gulp.series(css, postCSS)
  );
}
//*-----------------DIST> CSS---------------------
function minCSS() {
  return gulp.src('build/styles/main.css')
    .pipe(csso()) //-minimizo
    // .pipe(rename({
    //   suffix: '.min' //-renombro
    // }))
    .pipe(gulp.dest('dist/styles/'));
};

//---------------EXPORTS-TASKS--------------------
//---------------cleans build--------------------
exports.cleanBuildPugs = gulp.parallel(
  cleanBuildPages
  // cleanBuildArticles,
  // cleanBuildProjects
  // cleanBuildSkills
);
exports.cleanBuildCSS = cleanBuildCSS;
exports.cleanBuildJS = cleanBuildJS;

exports.cleanBuild = gulp.series(
  gulp.parallel(
    cleanBuildPages
    // cleanBuildArticles,
    // cleanBuildProjects
    // cleanBuildSkills
  ),
  cleanBuildCSS,
  cleanBuildJS
);
//---------------cleans dist--------------------
exports.cleanDistPugs = gulp.parallel(
  cleanDistPages
  // cleanDistArticles,
  // cleanDistProjects
  // cleanDistSkills
);
exports.cleanDistCSS = cleanDistCSS;
exports.cleanDistJS = cleanDistJS;

exports.cleanDist = gulp.series(
  gulp.parallel(
    cleanDistPages,
    // cleanDistArticles,
    // cleanDistProjects
    // cleanDistSkills
  ),
  cleanDistCSS,
  cleanDistJS
);
//* ----------TASKS JAVASCRIPT--------------------
exports.revisaJS = revisaJS;
// exports.optimizaJS = optimizaJS;
// exports.convertirJS = convertirJS;
exports.buildJS = buildJS;
exports.distJS = distJS;
exports.minJS = minJS;
exports.watchJS = watchJS;
//* ----------TASKS-SAAS > CSS--------------------
exports.css = css;
exports.postCSS = postCSS;
exports.cssDist = cssDist;
exports.cssBuild = cssBuild;
exports.minCSS = minCSS;
exports.watchSass = watchSass;
//* --------TASKS-PUG's > HTML--------------------
exports.watchPugs = watchPugs;
// exports.pugsBuild = pugsBuild;
// exports.pugsDist = pugsDist;
//* --------------TASK-DEFAULT--------------------
exports.watching = gulp.parallel(
  watchPugs,
  watchSass,
  watchJS
);

exports.distribuible = gulp.series(
  pasaDistImagenes,
  cleanDistPages,
  pagesDistPug,
  // cleanDistSkills,
  // skillsDistPug,
  // cleanDistArticles,
  // articlesDistPug,
  // cleanDistProjects,
  // projectsDistPug,
  // cssDist,COMENTO POR QUE ES VERSION MI WEB Y NO HACE FALTA CODIGO SIN MINIMIZAR.
  minCSS,
  // distJS,COMENTO POR QUE ES VERSION MI WEB Y NO HACE FALTA CODIGO SIN MINIMIZAR.
  minJS
);

exports.builder = gulp.series(
  pasaBuildImagenes,
  cleanBuildPages,
  pagesBuildPug,
  // cleanBuildSkills,
  // skillsBuildPug,
  // cleanBuildArticles,
  // articlesBuildPug,
  // cleanBuildProjects,
  // projectsBuildPug,
  css,
  postCSS,
  buildJS
);
