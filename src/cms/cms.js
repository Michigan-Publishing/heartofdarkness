import CMS from "netlify-cms"
import {
  FulcrumText,
  FulcrumAudio,
  FulcrumImage,
  FulcrumVideo,
  MapNavigation,
} from "./editorComponents"

CMS.registerEditorComponent(FulcrumText)
CMS.registerEditorComponent(FulcrumAudio)
CMS.registerEditorComponent(FulcrumImage)
CMS.registerEditorComponent(FulcrumVideo)

CMS.registerEditorComponent(MapNavigation)
