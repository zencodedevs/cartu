using Microsoft.AspNetCore.Mvc.Formatters;
using System.Xml;
using System.Xml.Serialization;

namespace ConfirmAPI.Options
{
    public class XmlSerializerOutputFormatterNoNamespace : XmlSerializerOutputFormatter
    {
        protected override void Serialize(XmlSerializer xmlSerializer, XmlWriter xmlWriter, object? value)
        {
            var emptyNamespaces = new XmlSerializerNamespaces();
            emptyNamespaces.Add("", "");
            xmlSerializer.Serialize(xmlWriter, value, emptyNamespaces);
        }
    }
}
