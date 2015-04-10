// FASTPATH GENERATED FILE - DO NOT EDIT
_ws.vm = new _intv_VoiceModule(_ws, 'ID3350_RCCProductName');


_ws.vm.addInitialPromptGroup();
  // IFCONDITION: If Task = AgentRequest
  if (_ws.gateKeeper.getString("Task").equalsIgnoreCase("AgentRequest"))
  {
    _ws.vm.addInitialPrompt('ID3350_i_3');  /* Before I transfer you, please say what instrument you're calling about. */
  }
  // ELSECONDITION: Else
  else if (true)
  {
    // IFCONDITION: Else if SupportType = Literature
    //if (_ws.gateKeeper.getString("SupportType").equalsIgnoreCase("Literature"))
    //{
    //  _ws.vm.addInitialPrompt('ID3350_i_2');  /* What instrument are you calling about? */
    //}
    // ELSECONDITION: Else
    //else if (true)
    //{
      _ws.vm.addInitialPrompt('ID3350_i_1');  /* And finally, what instrument are you calling about? */
    //}
  }
_ws.vm.addNomatchPromptGroup('1', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNomatchPrompt('ID3350_r_1');  /* What's the name of the instrument? */
_ws.vm.addNomatchPromptGroup('2', 'sequence', false);
  _ws.vm.addNomatchPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNomatchPrompt('ID3350_r_1');  /* Please say the name of the instrument once more. */
_ws.vm.addNoinputPromptGroup('1', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addNoinputPrompt('ID3350_r_1');  /* What's the name of the instrument? */
_ws.vm.addNoinputPromptGroup('2', 'sequence', false);
  _ws.vm.addNoinputPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addNoinputPrompt('ID3350_r_1');  /* Please say the name of the instrument once more. */
_ws.vm.addDisconfirmPromptGroup('1', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_1');  /* I'm sorry. */
  _ws.vm.addDisconfirmPrompt('ID3350_r_1');  /* What's the name of the instrument? */
_ws.vm.addDisconfirmPromptGroup('2', 'sequence', false);
  _ws.vm.addDisconfirmPrompt('Global_r_2');  /* My mistake. */
  _ws.vm.addDisconfirmPrompt('ID3350_r_1');  /* Please say the name of the instrument once more. */
  {
	  var promptArray = [];
	  var promptCounter = 0;
	  promptArray[promptCounter++] = [ 'ID3350_c_1', 'messageid' ];  /* Was that 717 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('717', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_2', 'messageid' ];  /* Was that nine oh two  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('902', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_3', 'messageid' ];  /* Was that nine eleven  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('911', 'CHOICE', 'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_4', 'messageid' ];  /* Was that nine twelve  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('912', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_5', 'messageid' ];  /* Was that nine seventeen rack  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('917rack', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('accuchekinform','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_7', 'messageid' ];  /* Was that accu-chek performa Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('accuchekperforma', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_8', 'messageid' ];  /* Was that accu trend Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('accutrend', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_9', 'messageid' ];  /* Was that Amplichip  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('amplichip', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_10', 'messageid' ];  /* Was that either Amplilink or Ampliscreen  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('amplilinkampliscreen', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_11', 'messageid' ];  /* Was that B one twenty three  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('b123', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_12', 'messageid' ];  /* Was that base unit Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('baseunit', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_13', 'messageid' ];  /* Was that B G E Link  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('bgelink', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_14', 'messageid' ];  /* Was that plate reader  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('biotekplatereaderelx800', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_15', 'messageid' ];  /* Was that plate washer  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('biotekplatewasherelx50', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_16', 'messageid' ];  /* Was that blood gas  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('bloodgas', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_17', 'messageid' ];  /* Was that C one eleven  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c111', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_18', 'messageid' ];  /* Was that C three eleven  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c311', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_19', 'messageid' ];  /* Was that C five oh one  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('c501', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_20', 'messageid' ];  /* Was that C five oh two  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c502', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_22', 'messageid' ];  /* Was that Cobas seven oh one  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('c701', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_23', 'messageid' ];  /* Was that Cobas seven oh two  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c702', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_24', 'messageid' ];  /* Was that c711 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c711', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_25', 'messageid' ];  /* Was that Cobas eight thousand  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('c8000', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_26', 'messageid' ];  /* Was that CapTaq  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('captaq', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('captaq','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_27', 'messageid' ];  /* Was that cardiac reader  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cardiacreader', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_28', 'messageid' ];  /* Was that cedex Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cedex', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_29', 'messageid' ];  /* Was that cedex hires Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cedexhires', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_30', 'messageid' ];  /* Was that cedex xs Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cedexxs', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_31', 'messageid' ];  /* Was that cedex yeast Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cedexyeast', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_32', 'messageid' ];  /* Was that coaguchek xs Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('coaguchekxs', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('coaguchekxs','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_33', 'messageid' ];  /* Was that Cobas 4800  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobas4800', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_34', 'messageid' ];  /* Was that Cobas six thousand  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobas6000', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_133', 'messageid' ];  /* Was that Cobas  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobas', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_35', 'messageid' ];  /* Was that Cobas Amplicor  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasamplicor', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_36', 'messageid' ];  /* Was that Cobas Ampliprep  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasampliprep', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_37', 'messageid' ];  /* Was that cobas connections Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasconnections', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_38', 'messageid' ];  /* Was that cobas fara Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasfara', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_39', 'messageid' ];  /* Was that cobas h232 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobash232', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_40', 'messageid' ];  /* Was that Cobas Integra  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasintegra', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_41', 'messageid' ];  /* Was that Cobas IT1000  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasit1000', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_42', 'messageid' ];  /* Was that cobas it 3000 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasit3000', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_43', 'messageid' ];  /* Was that cobas it middleware Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasitmiddleware', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_44', 'messageid' ];  /* Was that P five twelve  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasp512', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_45', 'messageid' ];  /* Was that P six twelve  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasp612', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_46', 'messageid' ];  /* Was that cobas pack Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobaspack', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_47', 'messageid' ];  /* Was that Criterion  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('criterion', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('criterion','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_48', 'messageid' ];  /* Was that CUA  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('cua', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('cua','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_49', 'messageid' ];  /* Was that Datacare P O C  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('datacarepoc', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('datacarepoc','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_50', 'messageid' ];  /* Was that data station amplilink Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('datastationamplilink', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_51', 'messageid' ];  /* Was that donor screening  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('donorscreening', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_52', 'messageid' ];  /* Was that DPX  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('dpx', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_54', 'messageid' ];  /* Was that E one seventy  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('e170', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_55', 'messageid' ];  /* Was that E four eleven  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('e411', 'CHOICE', 'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_56', 'messageid' ];  /* Was that E six oh one  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('e601', 'CHOICE', 'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_57', 'messageid' ];  /* Was that E six oh two  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('e602', 'CHOICE', 'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_58', 'messageid' ];  /* Was that Elecsys 2010  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('elecsys2010', 'CHOICE', 'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_59', 'messageid' ];  /* Was that GeneAmp 9600 Yes or No */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('geneamppcssytem9600', 'CHOICE', 'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_60', 'messageid' ];  /* Was that gsflx Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('gsflx', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_61', 'messageid' ];  /* Was that gs junior Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('gsjunior', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_62', 'messageid' ];  /* Was that for a centrifuge Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('heraeus17rscentrifuge', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_63', 'messageid' ];  /* Was that Hitachi  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hitachi', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_64', 'messageid' ];  /* Was that Hitachi interface  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hitachiinterface', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_65', 'messageid' ];  /* Was that Integra four hundred  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra400', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_66', 'messageid' ];  /* Was that Integra four hundred plus  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra400plus', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_67', 'messageid' ];  /* Was that Integra eight hundred  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integra800', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_68', 'messageid' ];  /* Was that Integra interface  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('integrainterface', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_69', 'messageid' ];  /* Was that ise900 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('ise900', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_76', 'messageid' ];  /* Was that lightcycler Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lightcyclercan', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_77', 'messageid' ];  /* Was that carousel centrifuge  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lightcyclercarouselcentrifuge', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_79', 'messageid' ];  /* Was that Linear Array  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lineararray', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_80', 'messageid' ];  /* Was that Magnalyzer  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('magnalyzer', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_83', 'messageid' ];  /* Was that magnapure Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('magnapurecan', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_87', 'messageid' ];  /* Was that Matrix Pipette  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('matriximpactpipette', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_88', 'messageid' ];  /* Was that micro array dryer Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('microarraydryer', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_89', 'messageid' ];  /* Was that Mira or Mira plus  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('miraormiraplus', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_89', 'messageid' ];  /* Was that Mira or Mira plus  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasmira', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_90', 'messageid' ];  /* Was that Modular  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('modular', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_131', 'messageid' ];  /* That was modular P is that right  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('modulare170', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_132', 'messageid' ];  /* That was modular E 170 is that right  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('modularp', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_91', 'messageid' ];  /* Was that modular preos Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('modularpreos', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('modularpreos','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_92', 'messageid' ];  /* Was that MPA  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('mpa', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('mpa','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_93', 'messageid' ];  /* Was that MPX  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('mpx', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_94', 'messageid' ];  /* Was that msb Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('msb', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_96', 'messageid' ];  /* Was that nimblegenms200 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('nimblegenms200', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_97', 'messageid' ];  /* Was that Omnilink  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('omnilink', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_98', 'messageid' ];  /* Was that p312 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('p312', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_99', 'messageid' ];  /* Was that p471 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('p471', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_100', 'messageid' ];  /* Was that P five oh one or seven oh one  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('p501701', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('p501701','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_101', 'messageid' ];  /* Was that p671 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('p671', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_102', 'messageid' ];  /* Was that PDM  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('pdm', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_103', 'messageid' ];  /* Was that PSD  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('psd', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_104', 'messageid' ];  /* Was that reflotron Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('reflotron', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_105', 'messageid' ];  /* Was that RSA Pro  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('rsapro', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_106', 'messageid' ];  /* Was that RSD Pro  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('rsdpro', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_109', 'messageid' ];  /* Was that S201  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('s201', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_110', 'messageid' ];  /* Was that s401 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('s401', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_114', 'messageid' ];  /* Was that Taqman  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('taqman', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('taqman','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_115', 'messageid' ];  /* Was that Tecan  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('tecan', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_116', 'messageid' ];  /* Was that Thermal Cycler  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('thermalcycler', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_117', 'messageid' ];  /* Was that urilux Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('urilux', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_118', 'messageid' ];  /* Was that urisys 1100 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('urisys1100', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_119', 'messageid' ];  /* Was that Urisys eighteen hundred  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('urisys1800', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_120', 'messageid' ];  /* Was that Urisys twenty four hundred  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('urisys2400', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_121', 'messageid' ];  /* Was that Urisys four eleven  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('urisys411', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_122', 'messageid' ];  /* Was that u6500 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('urisys6500', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_123', 'messageid' ];  /* Was that V four eighty  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('v480', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_126', 'messageid' ];  /* Was that VS two fifty  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('vs250', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_127', 'messageid' ];  /* Was that West Nile virus  Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('westnilevirus', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_128', 'messageid' ];  /* Was that x421 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('x421', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_129', 'messageid' ];  /* Was that Urisys 601 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('urisys601', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_130', 'messageid' ];  /* Was that Urisys 701 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItemConfirmAlways('urisys701', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_135', 'messageid' ];  /* Was that casydt Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('casydt', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('casydt','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_136', 'messageid' ];  /* Was that casytt Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('casytt', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_137', 'messageid' ];  /* Was that casyttc Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('casyttc', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_141', 'messageid' ];  /* Was that coaguchekxsplus Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('coaguchekxsplus', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_142', 'messageid' ];  /* Was that coaguchekxspro Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('coaguchekxspro', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_133', 'messageid' ];  /* Was that cobas8100 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobas8100', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_133', 'messageid' ];  /* Was that cobasacademy Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('cobasacademy', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_148', 'messageid' ];  /* Was that lightcycler15 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lightcycler15', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_149', 'messageid' ];  /* Was that lightcycler2 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lightcycler2', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_150', 'messageid' ];  /* Was that genomesequencer20 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('genomesequencer20', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_151', 'messageid' ];  /* Was that lightcycler480 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lightcycler480', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_174', 'messageid' ];  /* Was that lightcycler1536 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lightcycler1536', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_152', 'messageid' ];  /* Was that genomesequencerflx Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('genomesequencerflx', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_76', 'messageid' ];  /* Was that lightcycler96 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lightcycler96', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_154', 'messageid' ];  /* Was that genomesequencerflxplus Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('genomesequencerflxplus', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_76', 'messageid' ];  /* Was that lightcyclernano Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lightcyclernano', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_96', 'messageid' ];  /* Was that hybridizationsystem12 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hybridizationsystem12', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_157', 'messageid' ];  /* Was that magnapure96 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('magnapure96', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_96', 'messageid' ];  /* Was that hybridizationsystem4 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hybridizationsystem4', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_159', 'messageid' ];  /* Was that ima Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('ima', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_160', 'messageid' ];  /* Was that magnapurecompact Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('magnapurecompact', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_161', 'messageid' ];  /* Was that magnapurelc Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('magnapurelc', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_162', 'messageid' ];  /* Was that magnapurelc20 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('magnapurelc20', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_166', 'messageid' ];  /* Was that rtcacardio Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('rtcacardio', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_167', 'messageid' ];  /* Was that rtcainstrument Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('rtcainstrument', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_173', 'messageid' ];  /* Was that cedexbioht Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
 _ws.vm.addMenuItem('cedexbioht', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_175', 'messageid' ];  /* Was that hamilton Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hamilton', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('hamilton','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_177', 'messageid' ];  /* Was that hamilton star Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('hamiltonstar', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('hamiltonstar','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_176', 'messageid' ];  /* Was that hamilton diluter Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('hamiltondiluter', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_178', 'messageid' ];  /* Was that connect2 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('connect2', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_70', 'messageid' ];  /* Was that lc2 Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('lc2', 'CHOICE',  'null', promptArray);
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'ID3350_c_179', 'messageid' ];  /* Was that glucose meter Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('glucosemeter', 'CHOICE',  'null', promptArray);
  }
  {
  _ws.vm.addMenuItemConfirmNever('411','CHOICE','null');
  }
  {
  _ws.vm.addMenuItemConfirmNever('501','CHOICE','null');
  }
  {
  _ws.vm.addMenuItemConfirmNever('601','CHOICE','null');
  }
  {
  _ws.vm.addMenuItemConfirmNever('701','CHOICE','null');
  }
  {
  _ws.vm.addMenuItemConfirmNever('cobasit','CHOICE','null');
  }
  {
	  //var promptArray = [];
  //var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('benchmarkspecialstains','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('benchmarkultra','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('benchmarkxtlt','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('discovery','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('discoveryultra','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('discoveryxt','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('iscancoreoau','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('iscanhtruo','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('nexesihc','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('nexesspecialstains','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('symphony','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('symphonysplus','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('vantagesystems','CHOICE','null');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  //promptArray[promptCounter++] = [ 'ID3350_c_6', 'messageid' ];  /* Was that accuchek inform Yes or no */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('accuchekinform', 'CHOICE',  'null', promptArray);
  _ws.vm.addMenuItemConfirmNever('vias','CHOICE','null');
  }
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
  promptArray[promptCounter++] = [ 'c_1', 'messageid' ];  /* You wanted a support specialist, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  //_ws.vm.addMenuItem('operator', 'GLOBAL', '0', promptArray);
  _ws.vm.addMenuItemConfirmNever('operator','GLOBAL','0');
  }
  {
  var promptArray = [];
  var promptCounter = 0;
  promptArray[promptCounter++] = [ 'RP2350_c_1', 'messageid' ];  /* You said you don't know, is that right?  Yes or no? */
  // TODO addMenuItem: First parameter must match the grammar return data
  _ws.vm.addMenuItem('dontknowit', 'CHOICE',  '3', promptArray);
  }
_ws.vm.setGrammar('ID3350_RCCProductName.grxml', 'voice');

/*TODO DEV_NOTES 3350, 3400 and 3450 have the same verbiage, and are only separate modules so that the serial numbers may be separated by family line, so as to improve recognition.*/
