export default num => num
  .toString()
  .replace(new RegExp(`^(\\d{${num.length % 3 ? num.length % 3 : 0}})(\\d{3})`, 'g'), '$1 $2')
  .replace(/(\d{3})+?/gi, '$1 ')
  .trim();
