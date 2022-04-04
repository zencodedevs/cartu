using System.Xml;
using System.Xml.Serialization;

namespace Core.Helpers
{
    public static class XmlSerializationHelper
    {
        public static string Serialize<T>(this T value)
        {
            if (value == null)
            {
                return string.Empty;
            }

            var xmlSerializer = new XmlSerializer(typeof(T));
            var stringWriter = new StringWriter();

            using (var writer = XmlWriter.Create(stringWriter))
            {
                xmlSerializer.Serialize(writer, value);
                return stringWriter.ToString();
            }
        }
    }
}