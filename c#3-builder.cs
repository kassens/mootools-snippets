// c#3 builder by Daniel Steigerwald

using System;
using System.Collections.Generic;
using System.IO;
using System.Web.Script.Serialization;

public partial class _tests_MooBuild : System.Web.UI.Page
{

	protected void Page_Load(object sender, EventArgs e)
	{
		using (StreamWriter sw = File.CreateText(Context.Server.MapPath(@"~\js\src\mootools\mootools.js")))
			sw.Write(mooPart("core") + mooPart("more"));
	}

	string mooPart(string part)
	{
		string
			subPath = Context.Server.MapPath(@"~\js\src\mootools\" + part + @"\source"),
			scriptsJson = File.ReadAllText(subPath + @"\scripts.json"),
			o = string.Empty;
		var scripts = new JavaScriptSerializer().Deserialize<Dictionary<string, Dictionary<string, object>>>(scriptsJson);
		foreach (var dir in scripts)
			foreach (var file in dir.Value)
				o += File.ReadAllText(subPath + @"\" + dir.Key + @"\" + file.Key + ".js");
		return o;
	}
}