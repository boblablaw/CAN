_ws.vm = new _intv_VoiceModule(_ws, 'ID3590_701Disambig');

_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('ID3590_i_1');  /* Is that e411 or u411? */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3590_i_1');  /* Is that e411 or u411? */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3590_i_1');  /* Is that e411 or u411? */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3590_i_1');  /* Is that e411 or u411? */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3590_r_1');  /* Is that e411 or u411? */
  
{
  _ws.vm.addMenuItemConfirmNever('c701','CHOICE','null');
}
{
  _ws.vm.addMenuItemConfirmNever('p501701','CHOICE','null');
}
{
  _ws.vm.addMenuItemConfirmNever('urisys701','CHOICE','null');
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('ID3590_701Disambig.grxml', 'voice');


