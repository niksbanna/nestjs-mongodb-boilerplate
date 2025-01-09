# NestJS-MongoDB Boilerplate

## Description

This repository provides a boilerplate for starting a project with the NestJS framework and MongoDB. It includes the basic setup and configuration needed to quickly start developing a server-side application.

## Features

- **NestJS Framework**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: A source-available cross-platform document-oriented database program.
- **Docker**: Use Docker to containerize your application and its environment.
- **Docker Compose**: Easily manage your application services.

## Installation

Before you start, ensure you have Docker and Docker Compose installed on your machine.

```bash
# Clone the repository
$ git clone https://github.com/niksbanna/nestjs-mongodb-boilerplate.git

# Go to the project directory
$ cd nestjs-mongodb-boilerplate

# Start the project
$ docker-compose up
```

## Usage

Once the application is up and running, you can access the Swagger API documentation at `http://localhost:9001/api/docs`.

## Contributing

Contributions are welcome! Whether it's a bug report, new feature, correction, or additional documentation, we greatly value feedback and contributions from our community.

Please read through this document before submitting any issues or pull requests to ensure we have all the necessary information to effectively respond to your bug report or contribution.


### Reporting Bugs/Feature Requests

We welcome you to use the GitHub issue tracker to report bugs or suggest features.

When filing an issue, please check [existing open](https://github.com/niksbanna/nestjs-mongodb-boilerplate/issues), or [recently closed](https://github.com/niksbanna/nestjs-mongodb-boilerplate/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aclosed%20), issues to make sure somebody else hasn't already reported the issue. Please try to include as much information as you can. Details like these are incredibly useful:

* A reproducible test case or series of steps
* The version of our code being used
* Any modifications you've made relevant to the bug
* Anything unusual about your environment or deployment


### Contributing via Pull Requests
Contributions via pull requests are much appreciated. Before sending us a pull request, please ensure that:

1. You are working against the latest source on the *master* branch.
2. You check existing open, and recently merged, pull requests to make sure someone else hasn't addressed the problem already.
3. You open an issue to discuss any significant work - we would hate for your time to be wasted.

To send us a pull request, please:

1. Fork the repository.
2. Modify the source; please focus on the specific change you are contributing. If you also reformat all the code, it will be hard for us to focus on your change.
3. Ensure local tests pass.
4. Commit to your fork using clear commit messages.
5. Send us a pull request, answering any default questions in the pull request interface.
6. Pay attention to any automated CI failures reported in the pull request, and stay involved in the conversation.

GitHub provides additional document on [forking a repository](https://help.github.com/articles/fork-a-repo/) and [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

### Finding contributions to work on
Looking at the existing issues is a great way to find something to contribute on. As our projects, by default, use the default GitHub issue labels (enhancement/bug/duplicate/help wanted/invalid/question/wontfix), looking at any 'help wanted' issues is a great place to start.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Stay in Touch

- Author - [Narendra Singh](https://x.com/narendra0_singh)
- Website - [Portfolio](https://portfolio-git-master-niksbannas-projects.vercel.app/)
- Twitter - [@your-twitter-handle](https://x.com/narendra0_singh)

## Support

This project is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please read more here.

## Resources

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video courses.
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official enterprise support.
- To stay in the loop and get updates, follow us on [X](https://x.com/narendra0_singh) and [LinkedIn](https://www.linkedin.com/in/narendra-singh-chandrawat/).

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

## Compile and Run the Project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Project Setup

```bash
$ yarn install
```

## Run Tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## File Structure

The project follows the standard NestJS directory structure:

- `src/`: Contains the source code of the application.
- `test/`: Contains the tests for the application.
- `docker-compose.yml`: Docker Compose file to start the application and MongoDB service.
- `package.json`: Contains the dependencies and scripts for the application.

## Conclusion

This boilerplate provides a solid foundation for building a NestJS application with MongoDB. It includes all the necessary configurations and scripts to get started quickly. Whether you are a beginner or an experienced developer, this boilerplate can help you save time and focus on building your application.
