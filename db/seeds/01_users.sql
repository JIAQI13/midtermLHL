-- Users table seeds here (Example)
INSERT INTO users (name,password,email)
VALUES
('Alice','AlicePassword','123@123'),
('Bob','KiraPassword','abc@abc');

INSERT INTO maps (name,description)
VALUES
('Vancouver weather','rainy'),
('Edmonton weather','sunny');

INSERT INTO favourite_maps (user_id,map_id)
VALUES
(1,2),
(2,1);

INSERT INTO
pins (title,
description,
image,
map_id,user_id,latitude,longitude)
VALUES
('position1','I dont know where it is 1','💩',2,1,49.2609, -123.1140),
('position2','I dont know where it is 2','💩',1,2,49.260727, -123.126545);




