// FASTPATH GENERATED FILE - DO NOT EDIT


_ws.vm = new _intv_VoiceModule(_ws, 'RP1300_ProductOrderCheck');

_ws.vm.addInitialPromptGroup();
  _ws.vm.addInitialPrompt('RP1300_i_1');  /* Are you calling to place an applied science order? */
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('RP1300_i_1');  /* Are you calling to place an applied science order? */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('RP1300_i_1');  /* Are you calling to place an applied science order? */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('RP1300_i_1');  /* Are you calling to place an applied science order? */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('RP1300_i_1');  /* Are you calling to place an applied science order? */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('yes', 'CHOICE',  '1');
// TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('no', 'CHOICE',  '2');
//TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('parts', 'GLOBAL',  '7');
//TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('dispatch', 'GLOBAL',  '8');
//TODO addMenuItem: First parameter must match the grammar return data
_ws.vm.addMenuItemConfirmNever('bloodscreening', 'GLOBAL',  '9');

{
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('representative', 'GLOBAL', '1', promptArray);
}
{
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'c_2', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
	  // TODO addMenuItem: First parameter must match the grammar return data
	  _ws.vm.addMenuItem('operator', 'GLOBAL', '0', promptArray);
	}
_ws.vm.setGrammar('RP1300_ProductOrderCheck.grxml', 'voice');

