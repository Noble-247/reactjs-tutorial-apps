import { useState } from "react";

function Filter() {
  const courseList = [
    {
      id: 1,
      title: "Certificate in Digital Literacy",
      body: "In today's world it has become absolutely paramount for individuals of this day and age to acquire the basic IT skills to proficiently use a computer.This certificate course is designed to identify, develop and certify individuals with requisite skills and knowledge to utilize a computer in the office, home and school environments. It provides people of all ages with the means to increase their IT skills, prove their expertise, improve their academic performance and advance their professional careers.",
    },
    {
      id: 2,
      title: "Diploma in Information Technology",
      body: "IThis course is designed to further develop individuals with requisite IT skills and knowledge to utilize a computer in the office, home and school environments. The Diploma in Information Technology course is designed for individuals who intend to acquire the knowledge of some design packages in-conjunction with the Microsoft Office Suite Packages.",
    },
    {
      id: 3,
      title: "Administering MySQL Database",
      body: "Discover how to use MySQL, a popular choice of database for use in powerful web applications! During this 5.5-hour MySQL beginner course, discover the fundamental concepts beginner MySQL administrators need to master. Your professional instructor combines practical lectures that ensure you have a solid grasp of the basics. learn how to install MySQL for the first time. Discover critical concepts for designing a database. Explore how to administrate a MySQL database including limiting access, creating users, database backup and performance monitoring. Then get ready to take your MySQL skills to the next level as you learn SQL for developers, database replication, data encryption and more.",
    },
  ];

  const [searchText, setSearchText] = useState("");

  function handleChange(event) {
    // event.preventDefault();
    setSearchText(event.target.value);
  }

  return (
    <div className='p-4 my-3 border border-dark container'>
      <h2>Filters In React</h2>
      <form>
        <div className='my-5 form-group'>
          <input
            className='form-control'
            type='text'
            value={searchText}
            onChange={handleChange}
            placeholder='Enter your search query here'
          />
        </div>
      </form>
      <section>
        {courseList
          .filter((course) => {
            if (searchText === "") {
              return course;
            } else if (
              course.title
                .toLowerCase()
                .includes(
                  searchText.toLowerCase() ||
                    course.body.toLowerCase().includes(searchText.toLowerCase())
                )
            ) {
              return course;
            }
            return null;
          })
          .map((course) => {
            return (
              <div className='bg-light' key={course.id}>
                <h2>{course.title}</h2>
                <p>{course.body}</p>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default Filter;
