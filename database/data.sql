INSERT INTO "Skills" ("skillId", "skillName", "image")
  values(1,'JavaScript', 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'), (2, 'HTML', 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white');

INSERT INTO "User" ("userId", "firstName", "lastName", "aboutMe", "phone", "email", "github", "linkedin")
  values(1, 'Louisa', 'Whitaker', 'Software Engineer', '9497010902', 'louisa.whitaker@gmail.com', 'https://github.com/louiewhitz', 'https://www.linkedin.com/in/louisa-whitaker/');

INSERT INTO "Education" ("educationId", "degreeName", "institutionName", "institutionUrl", "userId", "skillId")
  values(1, 'Software Engineering', 'LearningFuze', 'https://learningfuze.com/', 1, 1);

INSERT INTO "Projects" ("projectId", "name", "projectUrl", "image", "description", "educationId", "userId")
  values(1, 'The Check-In', 'https://the-check-in.louisawhitaker.com/', 'https://user-images.githubusercontent.com/99847558/214485012-db73c2dd-3dfb-4f3c-9e4b-9aaf02e5bbd9.gif', 'description', 1, 1);

INSERT INTO "ProjectSkills" ("projectId", "skillId")
VALUES (1, 1), (1, 2);
