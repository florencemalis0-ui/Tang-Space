/**
 * 解码 Base64 混淆的邮箱地址并打开 mailto 链接
 */
export function decryptEmail(encoded: string) {
  const address = atob(encoded)
  window.location.href = 'mailto:' + address
}
