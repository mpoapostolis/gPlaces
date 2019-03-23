import { createAction } from "redux-actions";
import { UPDATE_I18N, UPDATE_LANG } from "../names";

const updateI18n = createAction(UPDATE_I18N);
const updateLang = createAction(UPDATE_LANG);

export default { updateI18n, updateLang };
