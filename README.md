# Monorepo PoC [![CI](https://github.com/sklar/mono/actions/workflows/ci.yml/badge.svg)](https://github.com/sklar/mono/actions/workflows/ci.yml)

A monorepo playground w/ two React apps (React) and shared components (without compilation).

<table>
<tr>
<td>

| ✨ | 🚥 |
| - | :-: |
| [Components](packages/components/) | |
| [One](packages/one/) | [![Netlify Status](https://api.netlify.com/api/v1/badges/5b756360-a618-4534-a9c9-c54a444a0722/deploy-status)](https://app.netlify.com/sites/mono-one/deploys) |
| [Two](packages/two/) | [![Netlify Status](https://api.netlify.com/api/v1/badges/480c9a0f-5614-492b-85cf-acd839eb7124/deploy-status)](https://app.netlify.com/sites/mono-two/deploys) |

</td>
<td>

```mermaid
graph TD
	A[Components]
	A --> B[One]
	A --> C[Two]
```

</td>
</tr>
</table>


## Links

- [Manage Monorepo with pnpm](https://egoist.dev/pnpm-monorepo)
- [Building the perfect GitHub CI workflow for your frontend team](https://blog.maximeheckel.com/posts/building-perfect-github-action-frontend-teams/)
- [Add Commitlint, Commitizen, Standard Version, and Husky to SvelteKit Project](https://davipon.hashnode.dev/add-commitlint-commitizen-standard-version-and-husky-to-sveltekit-project)
- [Ditching manual releases with Changesets](https://dnlytras.com/blog/using-changesets/)
- [Goodbye Dependabot, Hello Batch Dependency Updates](https://swyxkit.netlify.app/goodbye-dependabot-hello-batch-dependency-updates)
