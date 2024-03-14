-----------------------------------
-- influencer Table --
-- DROP TABLE IF EXISTS influencer;
CREATE TABLE IF NOT EXISTS influencer (
  inf_id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  phone_number VARCHAR(20),
  followers INTEGER,
  city VARCHAR(100),
  country VARCHAR(60),
  categories TEXT[],
  tags TEXT[],
  languages TEXT[],
  primary_contact VARCHAR(255),
  ig_id VARCHAR(255),
  profile_picture_url TEXT,
  bio TEXT,
  birthday DATE  
);

INSERT INTO influencer (username, name, email, password, phone_number, city, country, categories, tags, primary_contact, ig_id, profile_picture_url, bio, birthday)
VALUES 
('influencer1', 'John Doe', 'john.doe@example.com', 'password123', '1234567890', 'New York', 'USA', ARRAY['Fashion', 'Travel'], ARRAY['Fashion', 'Travel'], 'Jane Doe', '123456', 'https://example.com/profile.jpg', 'Fashion enthusiast and travel lover', '1990-01-01'),
('influencer2', 'Jane Smith', 'jane.smith@example.com', 'password456', '9876543210', 'Los Angeles', 'USA', ARRAY['Food', 'Lifestyle'], ARRAY['Food', 'Lifestyle'], 'John Smith', '654321', 'https://example.com/profile2.jpg', 'Foodie and lifestyle blogger', '1988-05-15'),
('influencer3', 'Sarah Johnson', 'sarah.johnson@example.com', 'password789', '5556667777', 'Chicago', 'USA', ARRAY['Fitness', 'Health'], ARRAY['Fitness', 'Health'], 'Mike Johnson', '987654', 'https://example.com/profile3.jpg', 'Fitness enthusiast and health advocate', '1985-09-20'),
('influencer4', 'David Lee', 'david.lee@example.com', 'passwordabc', '2223334444', 'Miami', 'USA', ARRAY['Music', 'Entertainment'], ARRAY['Music', 'Entertainment'], 'Emily Lee', '456789', 'https://example.com/profile4.jpg', 'Musician and entertainer', '1983-04-10'),
('influencer5', 'Emma Wilson', 'emma.wilson@example.com', 'passwordxyz', '7778889999', 'London', 'UK', ARRAY['Art', 'Design'], ARRAY['Art', 'Design'], 'Chris Wilson', '789012', 'https://example.com/profile5.jpg', 'Artist and designer', '1992-11-30'),
('influencer6', 'Michael Brown', 'michael.brown@example.com', 'password123xyz', '1112223333', 'Sydney', 'Australia', ARRAY['Technology', 'Gaming'], ARRAY['Technology', 'Gaming'], 'Sophie Brown', '345678', 'https://example.com/profile6.jpg', 'Tech enthusiast and gamer', '1987-07-05');



-----------------------------------
-- visitor Table --
-- DROP TABLE IF EXISTS visitor;
CREATE TABLE IF NOT EXISTS visitor (
  vis_id SERIAL PRIMARY KEY,
  uid VARCHAR(50) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE,
  saved_inf INTEGER[],
  saved_articles INTEGER[],
  phone_number VARCHAR(20),

);

INSERT INTO visitor (uid, name, email, saved_inf, saved_articles, phone_number)
VALUES 
('visitor1', 'Alice Johnson', 'alice.johnson@example.com', ARRAY[1, 2, 3], ARRAY[1, 2, 3, 4, 5, 6], '5551234567'),
('visitor2', 'Bob Brown', 'bob.brown@example.com', ARRAY[4, 5, 6], ARRAY[2, 3, 4, 5, 6], '5559876543');



-----------------------------------
-- review Table --
-- DROP TABLE IF EXISTS review;
CREATE TABLE IF NOT EXISTS review (
  review_id SERIAL PRIMARY KEY,
  vis_id INTEGER NOT NULL,
  inf_id INTEGER NOT NULL,
  rating INTEGER,
  comment TEXT,
  timestamp TIMESTAMP,
  FOREIGN KEY (vis_id) REFERENCES visitor (vis_id),
  FOREIGN KEY (inf_id) REFERENCES influencer (inf_id)
);
INSERT INTO review (vis_id, inf_id, rating, comment, timestamp)
VALUES 
(1, 1, 5, 'Great content!', '2022-01-15 10:00:00'),
(2, 2, 4, 'Interesting posts', '2022-01-16 12:30:00'),
(1, 3, 4, 'Informative content', '2022-01-17 15:45:00'),
(2, 4, 3, 'Enjoyed the music', '2022-01-18 09:20:00'),
(1, 5, 5, 'Beautiful designs', '2022-01-19 14:10:00'),
(2, 6, 4, 'Tech reviews were helpful', '2022-01-20 11:55:00');


-----------------------------------
-- experience Table --
-- DROP TABLE IF EXISTS experience;
CREATE TABLE IF NOT EXISTS experience (
  exp_id SERIAL PRIMARY KEY,
  inf_id INTEGER NOT NULL,
  company VARCHAR(100) NOT NULL,
  role_title VARCHAR(100) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  link VARCHAR(255),
  description TEXT,
  FOREIGN KEY (inf_id) REFERENCES influencer (inf_id)
);
INSERT INTO experience (inf_id, company, role_title, start_date, end_date, link, description)
VALUES 
(1, 'Fashion Co.', 'Fashion Designer', '2010-06-01', '2015-12-31', 'https://fashionco.com', 'Designed trendy clothing collections'),
(2, 'Food Blog', 'Food Critic', '2015-03-15', NULL, 'https://foodblog.com', 'Wrote reviews on various restaurants and cuisines'),
(3, 'Fitness Magazine', 'Fitness Trainer', '2012-09-10', '2018-11-30', 'https://fitnessmag.com', 'Provided workout tips and training programs'),
(4, 'Music Studio', 'Musician', '2005-03-20', NULL, 'https://musicstudio.com', 'Recorded albums and performed live concerts'),
(5, 'Art Gallery', 'Artist', '2014-07-05', '2019-12-20', 'https://artgallery.com', 'Exhibited paintings and sculptures in solo and group shows'),
(6, 'Tech Company', 'Tech Specialist', '2010-12-15', '2016-08-25', 'https://techcompany.com', 'Developed software applications and reviewed gaming products');
