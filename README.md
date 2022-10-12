# Monorepo PoC

A monorepo playground w/ two apps and shared components.

<table border="0" cellspacing="0">
<tr>
<td>

| ✨ | 🚥 |
| - | :-: |
| [Components](packages/components/) | |
| [One](packages/one/) | [![Netlify Status](https://api.netlify.com/api/v1/badges/fd236b30-6d56-49f4-8c11-95dfe31fe62e/deploy-status)](https://app.netlify.com/sites/mono-one/deploys) |
| [Two](packages/two/) | [![Netlify Status](https://api.netlify.com/api/v1/badges/a6e4e8b0-ed94-4177-9ff9-5d82c58b3c3d/deploy-status)](https://app.netlify.com/sites/mono-two/deploys) |

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
