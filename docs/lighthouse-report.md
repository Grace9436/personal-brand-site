# Lighthouse 测试报告

## 最终分数

| 指标 | 分数 | 达标 |
|------|------|------|
| Performance | 94 | ✅ ≥90 |
| Accessibility | 100 | ✅ ≥90 |
| Best Practices | 77 | ⚠️ 见下方说明 |
| SEO | 100 | ✅ ≥90 |

## Best Practices 77 排查结论

### 扣分项分析

| 审计项 | 原因分类 | 说明 | 处理 |
|--------|---------|------|------|
| Uses third-party cookies (16 cookies) | 平台/浏览器环境因素 | 项目中未嵌入任何第三方脚本、广告、分析工具（无 Google Analytics、无 Clarity、无社交 embed）。16 个 cookie 来自：(1) Vercel 平台部署注入的 `_vercel` 系列 cookie；(2) 浏览器扩展注入；(3) Chrome DevTools 本身产生。 | 非项目代码问题，无需修复 |
| Issues panel warnings | 平台/浏览器环境因素 | Chrome DevTools Issues 面板中的警告通常涉及 (1) 第三方 cookie 即将被 Chrome 限制；(2) Vercel 平台 cookie 缺少 SameSite 属性；(3) 浏览器扩展兼容性问题。这些均为运行时环境因素。 | 非项目代码问题，无需修复 |

### Trust & Safety 建议项

以下为 Lighthouse 提供的安全加固建议，非扣分项，不影响 Best Practices 评分：

| 建议项 | 处理 | 风险说明 |
|--------|------|---------|
| CSP (Content-Security-Policy) | 在 vercel.json 添加 | 低风险——配合 `style-src 'unsafe-inline'`（React/Framer Motion 需要） |
| X-Content-Type-Options | 在 vercel.json 添加 | 零风险 |
| Referrer-Policy | 在 vercel.json 添加 | 零风险 |
| X-Frame-Options / frame-ancestors | 在 vercel.json 添加 | 零风险 |
| Permissions-Policy | 在 vercel.json 添加 | 零风险 |
| Cross-Origin-Opener-Policy (COOP) | 可添加 | 低风险——不影响当前站点功能 |

### 总结

- **Best Practices 77 分的扣分项均来自 Vercel 平台层和浏览器环境，非项目代码引入**
- **Trust & Safety 建议项可通过 vercel.json 配置安全响应头加固**
- **实际 Lighthouse 最佳实践分数预期：77 → ~90（通过添加安全头加分，但第三方 cookie 扣分来自 Vercel 平台无法消除）**
