export const convertFile = (file) => (
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => { resolve(reader.result); };
    reader.onerror = () => { reject(reader.error); };
    reader.readAsDataURL(file);
  })
);

export const empty = () => {};
