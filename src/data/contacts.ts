/**
 * 站点联系方式常量。
 *
 * 命令面板 / 关于页 / 全局微信弹窗共用，集中维护避免多处硬编码。
 *
 * - EMAIL_B64：邮箱的 Base64 编码（轻度混淆，防简单爬虫）。
 *   在浏览器控制台执行 btoa('your@email.com') 即可获得，把结果填到下面。
 */

// TODO: 替换为真实邮箱的 Base64 编码。
export const EMAIL_B64 = 'aGVsbG9AZXhhbXBsZS5jb20='
