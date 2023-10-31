import * as core from '@actions/core'
import * as github from '@actions/github'

async function run() {
  const token = core.getInput('github-token', { required: true })
  const client = github.getOctokit(token)
  // merge the pull request
  client.rest.pulls.merge({
    owner: github.context.payload.repository!.owner.login,
    repo: github.context.payload.repository!.name,
    pull_number: github.context.payload.pull_request!.number,
    merge_method: 'rebase'
  })
}

run()
