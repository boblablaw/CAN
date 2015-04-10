_ws.vm = new _intv_VoiceModule(_ws, 'ID3580_601Disambig');

_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('ID3580_i_1');  /* Is that e411 or u411? */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3580_i_1');  /* Is that e411 or u411? */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3580_i_1');  /* Is that e411 or u411? */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3580_i_1');  /* Is that e411 or u411? */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3580_r_1');  /* Is that e411 or u411? */
  
{
  _ws.vm.addMenuItemConfirmNever('e601','CHOICE','null');
}
{
  _ws.vm.addMenuItemConfirmNever('urisys601','CHOICE','null');
}
{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '0', promptArray);
}
_ws.vm.setGrammar('ID3580_601Disambig.grxml', 'voice');


