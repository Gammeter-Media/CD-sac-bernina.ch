# Kickstart a new Docusaurus-Project

* prepare a new git-repository on __GitHub(!)__

* clone this `docker-base-repository`
    ```bash
    git clone <git_url>
    cd <directory>
    rm -rf .git
    git init
    git add .
    git commit -m "init"
    git remote add origin <remote repository URL>
    git push origin develop -u --force
    ```

* search and replace all `example` to your project-name (eg. `engadinerpost`)
    * in `docker-compose.override.yml`

* remove dummy-content
    * `docs/*`, `blog/*`, `src/pages/*`

* Remove the lines above and fill in some project-description below

* commit and push your work


# Project name
{Project description}


## get up and running on a new machine
```bash
docker-compose up -d
```


## how to deploy to github pages

* On GitHub create a new Repository (https://docusaurus.io/docs/deployment#deploying-to-github-pages )
    * Ex "gammetermedia.github.io"
* Go in new Repository
    * Settings
    * Pages
    * Build and Deployment -> Source GitHub Actions
* `git remote set-url origin <<insert new repository>>`