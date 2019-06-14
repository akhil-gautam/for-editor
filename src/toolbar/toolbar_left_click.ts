import insert from '../helpers/insertText.js'

function toolbar_left_undo_click($vm) {

}

function toolbar_left_redo_click($vm) {

}

function toolbar_left_h1_click($vm) {
  insert($vm, '# ', '一级标题')
}

function toolbar_left_h2_click($vm) {
  insert($vm, '## ', '二级标题')
}

function toolbar_left_h3_click($vm) {
  insert($vm, '### ', '三级标题')
}

function toolbar_left_h4_click($vm) {
  insert($vm, '#### ', '四级标题')
}

function toolbar_left_img_click($vm) {
  insert($vm, '![alt](', 'url', ')')
}

function toolbar_left_link_click($vm) {
  insert($vm, '[title](', 'url', ')')
}

function toolbar_left_code_click($vm) {
  insert($vm, '```', 'language', '\n\n```')
}

function toolbar_left_save_click($vm) {

}

export const toolbar_left_click = (type, $vm) => {
  const left_click = {
    'undo': toolbar_left_undo_click,
    'redo': toolbar_left_redo_click,
    'h1': toolbar_left_h1_click,
    'h2': toolbar_left_h2_click,
    'h3': toolbar_left_h3_click,
    'h4': toolbar_left_h4_click,
    'img': toolbar_left_img_click,
    'link': toolbar_left_link_click,
    'code': toolbar_left_code_click,
    'save': toolbar_left_save_click,
  }
  left_click[type]($vm)
}