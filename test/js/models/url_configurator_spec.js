describe ('Url Configurator', function() {

  'use strict';

  var urlConf;
  beforeEach (function() {
    urlConf = new UrlConfigurator ();
    urlConf.baseUrl = 'https://stage-xxx.rcredits.org/pos';
  });

  it ('Should create url replace the member ID', function() {
    expect ('https://stage-ABC.rcredits.org/pos').toBe (urlConf.getServerUrl ('ABC'));
  });


});

