DROP TABLE "gallery";

CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (1000) NOT NULL,
	"alt" VARCHAR (100) NOT NULL,
    "description" VARCHAR (350) NOT NULL,
    "date" VARCHAR (30),
    "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" ("path", "alt", "description", "date") VALUES ('images/performance.jpg', 'Kim in the silks', 'This was the beginning of my circus performing journey. This image is my first professional photoshoot. Costuming, make-up, and styling by me.', '2015');
INSERT INTO "gallery" ("path", "alt", "description", "date") VALUES ('images/eddyKim.jpg', 'Eddy and Kim', 'I met Eddy 6 years ago, and 4 years ago we became engaged. He is the great love of my life, my partner, and my soulmate.', '2016');
INSERT INTO "gallery" ("path", "alt", "description", "date") VALUES ('images/graduation.JPG', 'Kim in Foothills of Boulder, CO', 'I completed my Master of Arts Degree in Transpersonal Ecospychology from Naropa University. My expertise is in somatic forms of ecotherapy and rewilding menstruation. This photo was taken in the Foothills after my graduation ceremony.', '2016');
INSERT INTO "gallery" ("path", "alt", "description", "date") VALUES ('images/firstBurn.jpeg', 'Kim on the Playa', 'The first year I went to Burning Man, I camped with a theme camp, I knew no one, and met many amazing humans who I still connect with to this day. Some from all over the world. This was my first burn night...Eric showed me the way!', '2015');

UPDATE "gallery" SET "likes" = $1 WHERE id = $2;

SELECT * FROM "gallery";

