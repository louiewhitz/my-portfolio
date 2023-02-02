set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
CREATE SCHEMA "public";

CREATE TABLE "public"."User" (
    "userId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"aboutMe" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"github" TEXT NOT NULL,
	"linkedin" TEXT NOT NULL,
    CONSTRAINT "User_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public"."Education" (
	"educationId" serial NOT NULL,
	"degreeName" TEXT NOT NULL,
	"institutionName" TEXT NOT NULL,
	"institutionUrl" TEXT NOT NULL,
	"userId" int NOT NULL,
	"skillId" int NOT NULL,
    CONSTRAINT "Education_pk" PRIMARY KEY ("educationId")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public"."Projects" (
	"projectId" serial NOT NULL,
	"description" TEXT NOT NULL,
	"name" TEXT NOT NULL,
	"projectUrl" TEXT NOT NULL,
	"image" TEXT NOT NULL,
	"userId" integer NOT NULL,

	"educationId" integer,
CONSTRAINT "Projects_pk" PRIMARY KEY ("projectId")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public"."Skills" (
	"skillId" serial NOT NULL,
	"skillName" TEXT NOT NULL,
	"image" TEXT NOT NULL,
	CONSTRAINT "Skills_pk" PRIMARY KEY ("skillId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "ProjectSkills" (
  "projectId" INT NOT NULL,
  "skillId" INT NOT NULL,
  CONSTRAINT "ProjectSkills_pk" PRIMARY KEY ("projectId", "skillId"),
  CONSTRAINT "ProjectSkills_fk0" FOREIGN KEY ("projectId") REFERENCES "Projects"("projectId"),
  CONSTRAINT "ProjectSkills_fk1" FOREIGN KEY ("skillId") REFERENCES "Skills"("skillId")
);



ALTER TABLE "Education" ADD CONSTRAINT "Education_fk0" FOREIGN KEY ("skillId") REFERENCES "Skills"("skillId");

ALTER TABLE "Projects" ADD CONSTRAINT "Projects_fk0" FOREIGN KEY ("userId") REFERENCES "User"("userId");

ALTER TABLE "Projects" ADD CONSTRAINT "Projects_fk2" FOREIGN KEY ("educationId") REFERENCES "Education"("educationId");






-- CREATE SCHEMA "public";

-- CREATE TABLE "public"."User" (
--   "userId" serial PRIMARY KEY,
--   "firstName" TEXT NOT NULL,
--   "lastName" TEXT NOT NULL,
--   "aboutMe" TEXT NOT NULL,
--   "phone" TEXT NOT NULL,
--   "email" TEXT NOT NULL,
--   "github" TEXT NOT NULL,
--   "linkedIn" TEXT NOT NULL
-- );

-- CREATE TABLE "public"."Education" (
--   "educationId" serial PRIMARY KEY,
--   "degreeName" TEXT NOT NULL,
--   "institutionName" TEXT NOT NULL,
--   "instituteUrl" TEXT NOT NULL,
--   "userId" int NOT NULL,
--   CONSTRAINT "Education_fk1" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId")
-- );

-- CREATE TABLE "public"."Projects" (
--   "projectId" serial PRIMARY KEY,
--   "name" TEXT NOT NULL,
--   "projectUrl" TEXT NOT NULL,
--   "image" TEXT NOT NULL,
--   "description" TEXT NOT NULL,
--   "educationId" integer NOT NULL,
--   "userId" integer NOT NULL,
--   "skillId" integer NOT NULL,
--   CONSTRAINT "Projects_fk0" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId")
-- );

-- CREATE TABLE "public"."Skills" (
--   "skillId" serial PRIMARY KEY,
--   "skillName" TEXT NOT NULL,
--   "image" TEXT NOT NULL,
--   "projectId" integer NOT NULL
--   CONSTRAINT "Skills_fk0" FOREIGN KEY ("projectId") REFERENCES "public"."Projects"("projectId")
-- );
-- ALTER TABLE "Education" ADD CONSTRAINT "Education_fk2" FOREIGN KEY ("userId") REFERENCES "public"."User"("userId");

-- ALTER TABLE "Projects" ADD CONSTRAINT "Projects_fk1" FOREIGN KEY ("projectId") REFERENCES "public"."User"("userId");

-- ALTER TABLE "Skills" ADD CONSTRAINT "Skills_fk1" FOREIGN KEY ("skillId") REFERENCES "public"."User"("userId");




