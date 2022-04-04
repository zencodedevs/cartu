using System.Xml;
using System.Xml.Serialization;

namespace Core.Helpers
{
    public static class XmlSerializationHelper
    {
        public static string Serialize<T>(this T value)
        {
            if (value == null)
                return string.Empty;

            var emptyNamepsaces = new XmlSerializerNamespaces(new[] { XmlQualifiedName.Empty });
            var serializer = new XmlSerializer(value.GetType());
            var settings = new XmlWriterSettings
            {
                Indent = true,
                OmitXmlDeclaration = true
            };

            using var stream = new StringWriter();
            using var writer = XmlWriter.Create(stream, settings);
            serializer.Serialize(writer, value, emptyNamepsaces);
            return stream.ToString();
        }

        public static T Deserialize<T>(this string value)
        {
            if (string.IsNullOrEmpty(value))
                return default;

            XmlSerializer serializer = new XmlSerializer(typeof(T));

            return (T)serializer.Deserialize(new StringReader(value));
        }
    }
}