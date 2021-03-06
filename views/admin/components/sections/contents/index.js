import abstract from "./abstract";
import text1 from "./text1";
import text2 from "./text2";

export const Text1 = abstract(text1, { url: '/events' });
export const Text2 = abstract(text2, { url: '/news' });
