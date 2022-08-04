// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

    ${data.description}

    ${data.licenseBadge}


---
## About
  ${data.about}

---
## Installation:
  ${data.install}

---
## License
  License used for this project - ${data.license}

---
## Contributing:
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  Following a code review, your feature will be merged.

---
## Tests:
  ${data.test}

---
## Contact Information:
* GitHub Username: ${data.username}
* GitHub Email: ${data.email}
`;
}

module.exports = generateMarkdown;
