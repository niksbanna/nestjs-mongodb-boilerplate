# Contributing to NestJS-MongoDB Boilerplate

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html)

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issue tracker](https://github.com/niksbanna/nestjs-mongodb-boilerplate/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/niksbanna/nestjs-mongodb-boilerplate/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People *love* thorough bug reports. I'm not even kidding.

## Development Process

1. Clone the repository:
   ```bash
   git clone https://github.com/niksbanna/nestjs-mongodb-boilerplate.git
   cd nestjs-mongodb-boilerplate
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   # With Docker
   docker-compose up
   
   # Or without Docker
   yarn start:dev
   ```

5. Run tests:
   ```bash
   # Run all tests
   yarn test
   
   # Run tests in watch mode
   yarn test:watch
   
   # Run e2e tests
   yarn test:e2e
   
   # Run tests with coverage
   yarn test:cov
   ```

6. Lint your code:
   ```bash
   yarn lint
   ```

7. Format your code:
   ```bash
   yarn format
   ```

## Code Style

- We use ESLint for linting and Prettier for code formatting.
- Please ensure your code follows the existing code style.
- Run `yarn lint` before committing to check for any linting errors.
- Run `yarn format` to automatically format your code.

## Commit Messages

- Use clear and meaningful commit messages.
- Start with a verb in the present tense (e.g., "Add", "Fix", "Update", "Remove").
- Keep the first line short (50 characters or less).
- Add more detailed description in the body if necessary.

Example:
```
Add user authentication feature

- Implement JWT authentication
- Add login and register endpoints
- Add password hashing with bcrypt
```

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent.
4. You may merge the Pull Request in once you have the sign-off of at least one other developer, or if you do not have permission to do that, you may request the reviewer to merge it for you.

## Testing

- Write unit tests for new features and bug fixes.
- Ensure all tests pass before submitting a pull request.
- Aim for high test coverage, but don't sacrifice code quality for coverage numbers.
- Use meaningful test descriptions that clearly explain what is being tested.

## Documentation

- Update documentation when you change functionality.
- Add JSDoc comments to functions and classes.
- Keep the README.md up to date with any new features or changes.

## Community

- Be respectful and considerate of others.
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md).
- Help others when you can.

## Questions?

Feel free to contact the maintainers if you have any questions:
- Twitter/X: [@narendra0_singh](https://x.com/narendra0_singh)
- GitHub Issues: [Create an issue](https://github.com/niksbanna/nestjs-mongodb-boilerplate/issues/new)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md).
