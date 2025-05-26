// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://weoppevrfepyewscspot.supabase.co";
// const supabaseKey = import.meta.env.VITE_SUPABASE__ANON;
// const supabase = createClient(supabaseUrl, supabaseKey);
// const getImageUrlsPromise = async (image: File) => {
//     return new Promise(async (resolve, reject) => {
//         if (!image) {
//             reject("Image is not provided");
//             return;
//         }
//         const newName: string = new Date().toString();
//         try {
//             console.log("uploading");
//             const res = await supabase.storage.from("cbc-profile-pictures").upload(newName, image, {
//                 cacheControl: "3600",
//                 upsert: false,
//             });
//             console.log(res);
//             console.log("uploaded");
//             const url = supabase.storage.from("cbc-profile-pictures").getPublicUrl(newName)
//                 .data.publicUrl;
//             console.log(url);
//             resolve(url);
//             return;
//         } catch (error) {
//             reject(error);
//             return;
//         }
//         // const url = await supabase.storage
//         //     .from("cbc-profile-pictures")
//         //     .getPublicUrl(newName);
//         // resolve(url);
//     });
// };
// export default getImageUrlsPromise;
import { createClient } from "@supabase/supabase-js";

const url = "https://weoppevrfepyewscspot.supabase.co";
const key = import.meta.env.VITE_SUPABASE__ANON;

const supabase = createClient(url, key);
const getImageUrlsPromise = async (image: File) => {
    return new Promise((resolve, reject) => {
        if (image === null) {
            reject(new Error("No file selected"));
            return;
        }
        const newName = Date.now() + image.name;
        supabase.storage
            .from("images")
            .upload(newName, image, {
                upsert: false,
                cacheControl: "3600",
            })
            .then(() => {
                const response = supabase.storage.from("images").getPublicUrl(newName)
                    .data.publicUrl;
                resolve(response);
            })
            .catch(() => {
                reject("Supabse Error:");
            });
    });
};
export default getImageUrlsPromise;
