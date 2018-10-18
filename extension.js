
const Main = imports.ui.main;

function enable()
{
	let indicator = Main.panel.statusArea['aggregateMenu'];
	if(indicator != null)
	{
		indicator._system._orientationLockAction.hide()
	}
}

function disable()
{
	let indicator = Main.panel.statusArea['aggregateMenu'];

	if(indicator != null)
	{
    		indicator._system._orientationLockAction.show()
	}
}
