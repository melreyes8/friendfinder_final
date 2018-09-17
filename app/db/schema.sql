DROP DATABASE IF EXISTS friendfinder_db;

CREATE DATABASE friendfinder_db;

USE friendfinder_db;

-- The "q" that is in the table below represents "question" 
CREATE TABLE friends (
    id INT(11) AUTO_INCREMENT NOT NULL,
    person_name VARCHAR(255),
    photo NVARCHAR(255),
    q1_scale INT(5),
    q2_scale INT(5),
    q3_scale INT(5),
    q4_scale INT(5),
    q5_scale INT(5),
    q6_scale INT(5),
    q7_scale INT(5),
    q8_scale INT(5),
    q9_scale INT(5),
    q10_scale INT(5),                
    primary key (id)
);
 
INSERT INTO friends (person_name, photo, q1_scale, q2_scale, q3_scale, q4_scale, q5_scale, q6_scale, q7_scale, q8_scale, q9_scale, q10_scale) 
VALUES ("Mel Reyes", "https://media.licdn.com/dms/image/C5103AQEYziA21fL5kA/profile-displayphoto-shrink_200_200/0?e=1542240000&v=beta&t=zPObauu42HQbkRfgCPbWXWNODPWJwChkhfjZYYJTMvk", 
5,
4,
3,
2,
1,
4,
3,
2,
1,
5);

INSERT INTO friends (person_name, photo, q1_scale, q2_scale, q3_scale, q4_scale, q5_scale, q6_scale, q7_scale, q8_scale, q9_scale, q10_scale) 
VALUES ("Tom Cruise", "https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg", 
1,
4,
5,
2,
1,
5,
3,
3,
4,
3);

INSERT INTO friends (person_name, photo, q1_scale, q2_scale, q3_scale, q4_scale, q5_scale, q6_scale, q7_scale, q8_scale, q9_scale, q10_scale) 
VALUES ("Jennifer Garner", "https://m.media-amazon.com/images/M/MV5BNTA4MDgzMTc1Nl5BMl5BanBnXkFtZTcwNjQyMjIwNQ@@._V1_SY1000_CR0,0,766,1000_AL_.jpg", 
3,
4,
3,
2,
5,
5,
3,
2,
5,
4);

INSERT INTO friends (person_name, photo, q1_scale, q2_scale, q3_scale, q4_scale, q5_scale, q6_scale, q7_scale, q8_scale, q9_scale, q10_scale) 
VALUES ("Chris Hemsworth", "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_.jpg", 
1,
4,
3,
2,
5,
2,
3,
3,
1,
3);

INSERT INTO friends (person_name, photo, q1_scale, q2_scale, q3_scale, q4_scale, q5_scale, q6_scale, q7_scale, q8_scale, q9_scale, q10_scale) 
VALUES ("Angelina Jolie", "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_SY1000_CR0,0,812,1000_AL_.jpg", 
3,
4,
3,
2,
1,
5,
3,
3,
5,
1);



SELECT * from friends;
