# Kingdom Chronicle Wiki 网站开发需求

## 项目标识

- 游戏名称：Kingdom Chronicle
- 网站名称：Kingdom Chronicle Wiki
- 平台：Steam
- 规范域名：https://www.kingdomchronicle.wiki
- 本地项目目录名：`kingdomchronicle`
- GitHub 仓库名：`kingdomchronicle`
- Cloudflare Worker 项目名：`kingdomchronicle`

## 已核验的官方身份

- Steam 官方商店：https://store.steampowered.com/app/4855560/Kingdom_Chronicle/
- Steam App ID：`4855560`
- 开发者：スタジオ白猫斎 / Studio Hakubyousai
- 发行商：くそげ工房 / Atelier KUSOGE
- Steam 关联官方网站：https://atelier-ksg.com/
- Steam 关联官方 X：https://x.com/hakubyousai
- Steam 上线日期：2026-07-22
- 官方定位：一款可在约 1–2 小时内完成一轮大陆统一的回合制奇幻战略 SLG。玩家管理内政、外交、谋略和战争，从约 168 名武将中招募、引拔或俘虏人才，并围绕六种兵种、区域战、全土战、三档难度与不同胜利路线作出决策。

身份边界：本项目只描述 Steam App `4855560` 的 Kingdom Chronicle 正式版本。官方站同时提供或提到 BOOTH 免费版；免费版与 Steam 版的 UI、武将、事件、地图连接、规则和 Steam 专属内容可能不同，后续资料必须明确区分版本。不得把 Kin's Chronicle、ARIA CHRONICLE、Kingdom 系列、其他同名或相似战略游戏，或源模板的开发者、发行商、商店链接、玩法、成就和素材当作 Kingdom Chronicle 的事实。

## 核心种子关键词

- `kingdom chronicle`
- `kingdom chronicle wiki`
- `kingdom chronicle guide`
- `kingdom chronicle beginner guide`
- `kingdom chronicle walkthrough`
- `kingdom chronicle officers`
- `kingdom chronicle officer registration`
- `kingdom chronicle unit types`
- `kingdom chronicle diplomacy`
- `kingdom chronicle achievements`
- `kingdom chronicle steam`

以上仅为建站预检种子词。完整开发前必须重新进行当前长尾需求、People Also Ask、相关搜索、竞品与 YouTube 资料调研，再将候选词标记为 `keep`、`ignore`、`watch` 或 `localize_later`，并据此决定实际页面、实体命名和路由；不预设 `codes`、`tier list` 或大规模武将数据库页面。

## 目标文件与命名空间

- 计划 PRD：`docs/kingdom-chronicle-wiki-prd-and-implementation-plan.md`
- 目标数据层：`src/data/kingdomchronicle/`
- 目标 App Router 路由组：`src/app/[locale]/(kingdomchronicle)/`
- 目标组件命名空间：`src/components/kingdomchronicle/`
- 目标静态资源命名空间：`public/kingdomchronicle/`

## 确认后的开发范围

1. 基于当前搜索需求、Steam 官方资料、开发者官网与官方渠道、可靠竞品和 YouTube 攻略，编写关键词矩阵、竞品基准和 PRD。
2. 将复制的 Kingdom Chronicle 模板彻底迁移为只服务 Kingdom Chronicle 的英文攻略站，按资料厚度决定首发页面数量，不为凑数制造空页面。
3. 根据已核验需求决定是否建设 beginner、walkthrough、officers、unit types、domestic affairs、diplomacy、intrigue、war、alliances、area battle、full-continent campaign、officer registration、achievements、system requirements、review、Steam/free-version differences 或其他页面；不得机械保留模板栏目。
4. 首页、分类枢纽、攻略详情、侧边 Wiki 导航、移动端 Wiki 菜单、相关链接、法律页面、sitemap、robots 和 manifest 均使用 Kingdom Chronicle 专属内容与元数据，并对随版本更新变化的规则、数值和版本差异标注核验时间。
5. 完成模板迁移残留检查、lint、TypeScript、构建和浏览器预览 QA；未请求广告，因此确认后移除一切继承的第三方广告脚本、路由、配置与环境变量。
6. 验证完成后创建并推送 GitHub 仓库 `kingdomchronicle`，部署同名 Cloudflare Worker，绑定 `kingdomchronicle.wiki` 与 `www.kingdomchronicle.wiki`，以 `www` 为 canonical，并在权限允许时配置 GitHub 自动构建和 GA4。
7. 创建并验证 GSC Domain Property `sc-domain:kingdomchronicle.wiki`，通过 Cloudflare apex DNS TXT 验证，提交完整 sitemap，并同步 GA-GTM 注册信息。
8. 按 `wiki-site-builder` 流程将站点幂等注册到 Shipmanager；第二个核心链接必须从实际实现且需求最强的 hub 中选择，不能预设为模板栏目。
